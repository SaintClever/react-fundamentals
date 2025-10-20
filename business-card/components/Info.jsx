function Info() {
  return(
    <>
      <div className="info">
        <img src="./images/NestaParchment.jpeg" alt="Nesta Parchment" />
        <span className="name">Nesta Parchment</span>
        <span className="title">Frontend Developer</span>
        <span className="website">nestaparchment.website</span>
      </div>
      <div className="buttons">
        <a href="https://github.com/SaintClever" target="_blank" rel="noopener noreferrer"><button className="email">GitHub</button></a> <a href="https://www.linkedin.com/in/parchment/" target="_blank" rel="noopener noreferrer"><button className="linkedin">
          LinkedIn
          </button></a>
      </div>
    </>
  );
}

export { Info };