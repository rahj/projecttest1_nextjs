export default function ProductIDLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div>
            <h1>Just inside Product ID Layout</h1>

            <div>{children}</div>
        </div>
    );
  }