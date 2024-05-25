 function BAInput(props: any) {
    const {placeholder,inputChange} = props;
    return <input placeholder={placeholder} onChange={inputChange}
    type="text" />
}




export default BAInput;