import GlassNavbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <GlassNavbar
        logoText="Rafie"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <section className="min-h-screen flex items-center justify-center text-white text-5xl">
        Hero content here
      </section>
    </main>
  );
}
