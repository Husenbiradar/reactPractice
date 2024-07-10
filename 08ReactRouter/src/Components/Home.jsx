import React from 'react';

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="flex justify-center mb-4">
        <h1 className="text-3xl font-bold">Welcome to my website!</h1>
      </header>
      <main className="flex-1 p-4 md:p-6 lg:p-12">
        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-2">About me</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-2">My skills</h2>
          <ul className="list-none mb-2">
            <li className="text-gray-600">HTML/CSS</li>
            <li className="text-gray-600">JavaScript</li>
            <li className="text-gray-600">React</li>
          </ul>
        </section>
        <section className="mb-4">
          <h2 className="text-2xl font-bold mb-2">My projects</h2>
          <ul className="list-none mb-2">
            <li className="text-gray-600">Project 1</li>
            <li className="text-gray-600">Project 2</li>
            <li className="text-gray-600">Project 3</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-200 h-12 flex justify-center items-center">
        <p className="text-gray-600">Copyright 2023 My Website</p>
      </footer>
    </div>
  );
}

export default Home;