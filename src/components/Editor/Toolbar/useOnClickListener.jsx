const useOnClickListener = () => {
  const onClick = (event) => {
    console.log("event is ", event);
  };

  return { onClick };
};

export default useOnClickListener;
