export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-muted-foreground">
          Built by SugarmanZhu
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SugarmanZhu/Mario"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Source Code
          </a>
          <span className="text-border">|</span>
          <span className="font-mono text-xs text-muted-foreground">
            PPO + IMPALA CNN
          </span>
        </div>
      </div>
    </footer>
  );
}
