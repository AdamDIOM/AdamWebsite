export default function Qualification(props){
    return (
        <tr>
            <td>{props.body}</td>
            <td>{props.level}</td>
            <td>{props.subject}</td>
            <td>{props.grade}</td>
        </tr>
    )
    
}