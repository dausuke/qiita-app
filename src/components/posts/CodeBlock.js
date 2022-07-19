import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {css} from '@emotion/react';

const CodeBlock = props => {
  const {inline, className, children, ...codeProps} = props;
  const match = /language-(\w+)/.exec(className || '');

  return (
    <div css={codeBlock}>
      {!inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code css={codeSpans} className={className} {...codeProps}>
          {children}
        </code>
      )}
    </div>
  );
};

export default CodeBlock;

const codeBlock = css`
  margin: 24px 0;
`;

const codeSpans = css`
  font-size: 0.9em;
  line-height: 1.5;
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  --tw-bg-opacity: 1;
  background-color: rgb(231 229 228 / var(--tw-bg-opacity));
  border-radius: 4px;
`;
