import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Input, Select, Row, GenButton, Spinner, Output, ToolHeader, ToolPage } from '../ui';

const COUNTS      = ['5 questions', '10 questions', '15 questions', '20 questions'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard', 'Mixed'];

export default function Quiz() {
  const [topic,      setTopic]      = useState('');
  const [count,      setCount]      = useState('10 questions');
  const [difficulty, setDifficulty] = useState('Medium');
  const [result,     setResult]     = useState('');
  const [loading,    setLoading]    = useState(false);

  const run = async () => {
    if (!topic.trim()) return alert('Please enter a topic.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.quiz({ topic, count, difficulty }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 06" title="Quiz Generator" desc="Practice MCQs with full answer explanations to test your knowledge" />
      <ToolPage>
        <GlassCard>
          <Label>Topic</Label>
          <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Data structures, WW2 causes, photosynthesis..." />
          <Row>
            <div><Label>Questions</Label><Select value={count}      onChange={e => setCount(e.target.value)}      options={COUNTS} /></div>
            <div><Label>Difficulty</Label><Select value={difficulty} onChange={e => setDifficulty(e.target.value)} options={DIFFICULTIES} /></div>
          </Row>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-help-circle">Generate quiz</GenButton>
        <Spinner visible={loading} text="Building your quiz..." />
        <Output text={result} />
      </ToolPage>
    </div>
  );
}
