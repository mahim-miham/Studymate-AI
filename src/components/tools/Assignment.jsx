import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Input, Select, Textarea, Row, GenButton, Spinner, Output, ToolHeader, ToolPage } from '../ui';

const TYPES      = ['Essay', 'Report', 'Case Study', 'Literature Review', 'Critical Analysis'];
const WORD_COUNTS = ['500 words', '800 words', '1000 words', '1500 words', '2000 words'];

export default function Assignment() {
  const [topic,     setTopic]     = useState('');
  const [type,      setType]      = useState('Essay');
  const [wordCount, setWordCount] = useState('1000 words');
  const [extra,     setExtra]     = useState('');
  const [result,    setResult]    = useState('');
  const [loading,   setLoading]   = useState(false);

  const run = async () => {
    if (!topic.trim()) return alert('Please enter an assignment topic.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.assignment({ topic, type, wordCount, extra }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 02" title="Assignment Writer" desc="Full academic assignment drafts in minutes — essays, reports, case studies" />
      <ToolPage>
        <GlassCard>
          <Label>Topic</Label>
          <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Impact of social media on mental health..." />
          <Row>
            <div><Label>Type</Label><Select value={type}      onChange={e => setType(e.target.value)}      options={TYPES} /></div>
            <div><Label>Length</Label><Select value={wordCount} onChange={e => setWordCount(e.target.value)} options={WORD_COUNTS} /></div>
          </Row>
          <div style={{ marginTop: 11 }}>
            <Label>Extra instructions (optional)</Label>
            <Textarea value={extra} onChange={e => setExtra(e.target.value)} placeholder="APA references, Malaysian context, formal tone..." rows={2} />
          </div>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-file-text">Generate assignment</GenButton>
        <Spinner visible={loading} text="Writing your assignment..." />
        <Output text={result} />
      </ToolPage>
    </div>
  );
}
