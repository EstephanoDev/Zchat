export default function Info() {
    const info = {
        title: 'Información',
        description: 'Aquí encontrarás información sobre la organización, como la descripción, la ubicación y los miembros.',
        author: 'YOOM',
    }

  return (
    <div className="flex flex-col gap-4 text-center">
      <h1 className="text-xl font-bold">{info.title}</h1>
            <div className="flex flex-col gap-2 justify-between">
                <p>{info.description}</p>
                <p>Author: {info.author}</p>
            </div>
            
    </div>
  );
}
