export interface PropMessage{
    name: string
    greet: string
}

const Greeting = (props:PropMessage) =>{
const {name,greet}=props;
    return (
        <div>
            Hello {name}, {greet}
        </div>
    );
}

export default Greeting;