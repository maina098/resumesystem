'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'next/navigation';
import { Download, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import EditorForm from '@/components/EditorForm/EditorForm';
import CVTemplate1 from '@/components/CVTemplates/CVTemplate1';
import CVTemplate2 from '@/components/CVTemplates/CVTemplate2';
import CVTemplate3 from '@/components/CVTemplates/CVTemplate3';
import CVTemplate4 from '@/components/CVTemplates/CVTemplate4';
import CVTemplate5 from '@/components/CVTemplates/CVTemplate5';
import CVTemplate6 from '@/components/CVTemplates/CVTemplate6';
import CVTemplate7 from '@/components/CVTemplates/CVTemplate7';
import CVTemplate8 from '@/components/CVTemplates/CVTemplate8';
import CVTemplate9 from '@/components/CVTemplates/CVTemplate9';
import CVTemplate10 from '@/components/CVTemplates/CVTemplate10';
import CVTemplate11 from '@/components/CVTemplates/CVTemplate11';
import CVTemplate12 from '@/components/CVTemplates/CVTemplate12';
import CVTemplate13 from '@/components/CVTemplates/CVTemplate13';
import CVTemplate14 from '@/components/CVTemplates/CVTemplate14';
import CVTemplate15 from '@/components/CVTemplates/CVTemplate15';
import CVTemplate16 from '@/components/CVTemplates/CVTemplate16';
import CVTemplate17 from '@/components/CVTemplates/CVTemplate17';
import CVTemplate18 from '@/components/CVTemplates/CVTemplate18';
import CVTemplate19 from '@/components/CVTemplates/CVTemplate19';
import CVTemplate20 from '@/components/CVTemplates/CVTemplate20';
import CVTemplate21 from '@/components/CVTemplates/CVTemplate21';
import CVTemplate22 from '@/components/CVTemplates/CVTemplate22';
import styles from './Editor.module.css';

export default function EditorPage() {
  const params = useParams();
  const templateId = params.id as string;
  const [mounted, setMounted] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'My_Resume',
  });

  if (!mounted) return null;

  return (
    <div className={styles.editorLayout}>
      {/* Top Bar for Editor */}
      <div className={styles.topBar}>
        <Link href="/" className={styles.backButton}>
          <ChevronLeft size={20} />
          <span>Back to Templates</span>
        </Link>
        <button onClick={handlePrint} className={styles.downloadBtn}>
          <Download size={18} />
          <span>Download PDF</span>
        </button>
      </div>

      <div className={styles.splitScreen}>
        {/* Left Panel: Form */}
        <div className={styles.leftPanel}>
          <EditorForm />
        </div>

        {/* Right Panel: Live Preview */}
        <div className={styles.rightPanel}>
          <div className={styles.previewContainer}>
            <div className={styles.previewWrapper}>
              {templateId === '1' ? (
                <CVTemplate1 ref={componentRef} />
              ) : templateId === '2' ? (
                <CVTemplate2 ref={componentRef} />
              ) : templateId === '3' ? (
                <CVTemplate3 ref={componentRef} />
              ) : templateId === '4' ? (
                <CVTemplate4 ref={componentRef} />
              ) : templateId === '5' ? (
                <CVTemplate5 ref={componentRef} />
              ) : templateId === '6' ? (
                <CVTemplate6 ref={componentRef} />
              ) : templateId === '7' ? (
                <CVTemplate7 ref={componentRef} />
              ) : templateId === '8' ? (
                <CVTemplate8 ref={componentRef} />
              ) : templateId === '9' ? (
                <CVTemplate9 ref={componentRef} />
              ) : templateId === '10' ? (
                <CVTemplate10 ref={componentRef} />
              ) : templateId === '11' ? (
                <CVTemplate11 ref={componentRef} />
              ) : templateId === '12' ? (
                <CVTemplate12 ref={componentRef} />
              ) : templateId === '13' ? (
                <CVTemplate13 ref={componentRef} />
              ) : templateId === '14' ? (
                <CVTemplate14 ref={componentRef} />
              ) : templateId === '15' ? (
                <CVTemplate15 ref={componentRef} />
              ) : templateId === '16' ? (
                <CVTemplate16 ref={componentRef} />
              ) : templateId === '17' ? (
                <CVTemplate17 ref={componentRef} />
              ) : templateId === '18' ? (
                <CVTemplate18 ref={componentRef} />
              ) : templateId === '19' ? (
                <CVTemplate19 ref={componentRef} />
              ) : templateId === '20' ? (
                <CVTemplate20 ref={componentRef} />
              ) : templateId === '21' ? (
                <CVTemplate21 ref={componentRef} />
              ) : templateId === '22' ? (
                <CVTemplate22 ref={componentRef} />
              ) : (
                <CVTemplate1 ref={componentRef} /> // Fallback
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
