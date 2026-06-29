import React, { useState } from 'react';
import { askClaude } from '../../api';
import { prompts } from '../../prompts';
import { GlassCard, Label, Input, Select, Row, GenButton, Spinner, Output, ToolHeader, ToolPage } from '../ui';

const DURATIONS = ['1-2 minutes', '3-5 minutes', '5-8 minutes', '10 minutes'];
const TONES     = ['Academic', 'Conversational', 'Storytelling'];

export default function Video() {
  const [topic,   setTopic]   = useState('');
  const [duration,setDuration]= useState('3-5 minutes');
  const [tone,    setTone]    = useState('Academic');
  const [result,  setResult]  = useState('');
  const [loading, setLoading] = useState(false);

  const run = async () => {
    if (!topic.trim()) return alert('Please enter a video topic.');
    setLoading(true);
    setResult('');
    try {
      const text = await askClaude(prompts.video({ topic, duration, tone }));
      setResult(text);
    } catch (e) {
      alert('Error: ' + e.message);
    }
    setLoading(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
      <ToolHeader eyebrow="Tool 04" title="Video Script Writer" desc="Natural, engaging scripts ready to record for video assignments" />
      <ToolPage>
        <GlassCard>
          <Label>Video topic</Label>
          <Input value={topic} onChange={e => setTopic(e.target.value)} placeholder="How neural networks learn..." />
          <Row>
            <div><Label>Duration</Label><Select value={duration} onChange={e => setDuration(e.target.value)} options={DURATIONS} /></div>
            <div><Label>Tone</Label><Select value={tone}     onChange={e => setTone(e.target.value)}     options={TONES} /></div>
          </Row>
        </GlassCard>
        <GenButton onClick={run} disabled={loading} icon="ti-video">Write video script</GenButton>
        <Spinner visible={loading} text="Scripting your video..." />
        <Output text={result} />
      </ToolPage>
    </div>
  );
}
