export default function Header({ name }: { name: string }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "1rem 2rem",
        color: " #AE8625",
        width: "100%",
        fontFamily: "'EB Garamond', serif",
      }}
    >
      <div style={{  fontWeight: 400, fontSize: "1.5rem" }}>
        {name}
      </div>

      <nav style={{ 
        display: "flex", 
        gap: "2rem",
        marginLeft: "3rem"
      }}>
        <a>XLPathways</a>
        <a>Projects</a>
        <a>Art</a>
      </nav>
    </header>
  );
}