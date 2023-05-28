import { FocusEvent } from 'react';

export const scrollIntoView = (
  e:
    | FocusEvent<HTMLInputElement, Element>
    | FocusEvent<HTMLTextAreaElement, Element>
) =>
  e.target.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'start',
  });
