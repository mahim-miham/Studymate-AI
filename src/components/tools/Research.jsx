import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Input, Select, Row, GenButton, Spinner, Output, ToolHeader, ToolPage } from '../ui';

const DEPTHS   = ['Brief overview', 'Detailed summary', 'Academic in-depth'];
const SUBJECTS = ['General', 'Computer Science', 'Biology', 'Business', 'History', 'Psychology', 'Engineering', 'Mathematics'];

export default function Research() {
  const [topic,   setTopic]   = useState('');
  const [depth,   setDepth]   = useState('Detailed summary');
  const [subject, setSubject] = useState('General');
  const [result,  setResult]  = useState('');
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!topic.trim()) return alert('Please enter a research topic.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.research({ topic, depth, subject }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 01" title="Research Assistant" desc="Get structured summaries, key concepts, and references on any topic" />
      <ToolPage>
        <GlassCard>
          <Label>Topic</Label>
          <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Climate change and biodiversity loss..." />
          <Row>
            <div><Label>Depth</Label><Select value={depth}   onChange={e => setDepth(e.target.value)}   options={DEPTHS} /></div>
            <div><Label>Subject</Label><Select value={subject} onChange={e => setSubject(e.target.value)} options={SUBJECTS} /></div>
          </Row>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-search">Research this topic</GenButton>
        <Spinner visible={loading} text="Researching — this may take a moment..." />
        <Output text={result} />
      </ToolPage>
    </div>
  );
}
