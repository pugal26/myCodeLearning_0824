const ParentComponent = ({ onClick }: { onClick: () => void }) => {
    return (
      <div>
          <div>ParentComponent</div>
  
          <button onClick={onClick}>Click here</button>
      </div>
  
    )
  
  
  
  }
  
  export default ParentComponent