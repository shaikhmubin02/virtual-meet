'use client'

import React, { useState, useEffect } from 'react';

const QuickNote = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('quickNote');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('quickNote', note);
    console.log('Note saved successfully!');
  }, [note]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <textarea
        rows={10}
        cols={67}
        value={note}
        onChange={handleChange}
        placeholder="Quick notes..."
        style={{ color: 'black', marginTop: '-40px', marginLeft: '-40px', overflow: 'hidden', resize: 'none', outline: 'none'}}
      />
    </div>
  );
};

export default QuickNote;
