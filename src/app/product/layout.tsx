export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            <h1>Featured Items</h1>

            <div>{children}</div>
        </div>
    );
  }