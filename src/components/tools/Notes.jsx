import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Select, Textarea, GenButton, Spinner, Output, ToolHeader, ToolPage } from '../ui';

const FORMATS = ['Bullet points', 'Cornell notes style', 'Mind map outline', 'Summary paragraphs'];

export default function Notes() {
  const [content, setContent] = useState('');
  const [format,  setFormat]  = useState('Bullet points');
  const [result,  setResult]  = useState('');
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!content.trim()) return alert('Please enter a topic or paste lecture content.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.notes({ content, format }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 05" title="Study Notes Maker" desc="Turn any topic or lecture content into clean, exam-ready study notes" />
      <ToolPage>
        <GlassCard>
          <Label>Topic or paste lecture content</Label>
          <Textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="OSI model in computer networking... or paste your lecture notes here"
            rows={5}
          />
          <div style={{ marginTop: 11 }}>
            <Label>Format</Label>
            <Select value={format} onChange={e => setFormat(e.target.value)} options={FORMATS} />
          </div>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-notes">Generate study notes</GenButton>
        <Spinner visible={loading} text="Creating your notes..." />
        <Output text={result} />
      </ToolPage>
    </div>
  );
}
