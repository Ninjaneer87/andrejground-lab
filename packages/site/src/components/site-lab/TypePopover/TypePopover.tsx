import BrowserOnly from '@docusaurus/BrowserOnly';
import CodeBlock from '@theme/CodeBlock';
import SitePopover from '@site/src/components/site-lab/SitePopover/SitePopover';
import styles from './TypePopover.module.scss';

type TypePopoverProps = {
  name: string;
  code: string;
};

function TypePopoverContent({ name, code }: TypePopoverProps) {
  return (
    <SitePopover placement="top-center" shouldFlip>
      <SitePopover.Trigger>
        <code className={styles.trigger}>{name}</code>
      </SitePopover.Trigger>
      <SitePopover.Content>
        <div className={styles.content}>
          <CodeBlock language="typescript">{code}</CodeBlock>
        </div>
      </SitePopover.Content>
    </SitePopover>
  );
}

export default function TypePopover(props: TypePopoverProps) {
  return (
    <BrowserOnly fallback={<code>{props.name}</code>}>
      {() => <TypePopoverContent {...props} />}
    </BrowserOnly>
  );
}
