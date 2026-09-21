function Student(props){
  return(
    <>
      <h2>This is student component</h2>
      <p>Student name : {props.name}</p>
      <p>Dept :{props.dept}</p>
      <p>{props.children}</p>
    </>
  )
}

export default Student