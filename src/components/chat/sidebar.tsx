export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r bg-muted/30 md:flex md:flex-col">
      <div className="border-b p-4">
        <button className="w-full rounded-xl border bg-background px-4 py-3 text-left text-sm font-medium hover:bg-muted">
          + New chat
        </button>
      </div>

      <div className="space-y-2 p-3">
        <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
          NestJS controllers
        </div>
        <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
          GraphQL resolvers
        </div>
        <div className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted">
          Dependency injection
        </div>
      </div>
    </aside>
  );
}