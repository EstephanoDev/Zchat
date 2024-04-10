export default function Chat() {
  const messages = [
    { text: 'Hola', sent: false },
    { text: '¿Cómo estás?', sent: true },
    { text: 'Bien, gracias', sent: false },
  ]; // Reemplaza esto con los datos reales

  return (
    <main className="h-full w-full flex flex-col justify-between">
      <ul className="overflow-auto">
        {messages.map((message, index) => (
          <li key={index} className={`text-white ${message.sent ? 'text-right bg-teal-500 justify-end max-w-lg m-2 p-2 px-4 ' : 'text-left bg-emerald-500 max-w-lg m-2 p-2 px-4 rounded-md'}`}>{message.text}</li>
        ))}
      </ul>
      <footer className="fixed bottom-0 w-full flex gap-2">
        <form className="mt-auto">
          <input type="text" placeholder="Escribe un mensaje" className="w-full rounded-md" />
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </main>
  );
}