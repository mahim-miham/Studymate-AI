import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Input, Select, Row, GenButton, Spinner, SlideOutput, ToolHeader, ToolPage } from '../ui';

const COUNTS    = ['5 slides', '8 slides', '10 slides', '12 slides'];
const AUDIENCES = ['University students', 'Lecturer', 'General public', 'Business audience'];

export default function Slides() {
  const [topic,    setTopic]    = useState('');
  const [count,    setCount]    = useState('8 slides');
  const [audience, setAudience] = useState('University students');
  const [result,   setResult]   = useState('');
  const [loading,  setLoading]  = useState(false);

  const run = async () => {
    if (!topic.trim()) return alert('Please enter a presentation topic.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.slides({ topic, count, audience }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 03" title="Slide Deck Builder" desc="Complete presentation outlines with content and speaker notes for each slide" />
      <ToolPage>
        <GlassCard>
          <Label>Presentation topic</Label>
          <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Introduction to Machine Learning..." />
          <Row>
            <div><Label>Slides</Label><Select value={count}    onChange={e => setCount(e.target.value)}    options={COUNTS} /></div>
            <div><Label>Audience</Label><Select value={audience} onChange={e => setAudience(e.target.value)} options={AUDIENCES} /></div>
          </Row>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-presentation">Build slide deck</GenButton>
        <Spinner visible={loading} text="Building your slide deck..." />
        <SlideOutput text={result} />
      </ToolPage>
    </div>
  );
}
