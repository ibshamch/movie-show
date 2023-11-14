const InputSearch = ({ input, setInput }) => {
  return (
    <div className="input-search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(input);
        }}
      >
        <input
          className="input"
          value={input}
          placeholder="Search For Movies"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default InputSearch;
