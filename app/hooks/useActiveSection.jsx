import { useState, useEffect } from 'react';

export function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const validSections = sections.filter((section) => section instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.25, 0.5, 0.75] }
    );

    validSections.forEach((section) => observer.observe(section));

    return () => {
      validSections.forEach((section) => observer.unobserve(section));
    };
  }, [sections]);

  return activeSection;
}
