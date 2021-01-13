
function People (prop){
    return(
        <div>
            <tr>
                <th>IMAGE</th>
                <br/>
                <th>NAME</th>
                <br/>
                <th>PHONE</th>
                <br/>
                <th>EMAIL</th>
                <br/>
                <th>DOB</th>
                <br/>
            </tr>

            {prop.type.map(people => 
                    <tr>
                        <td> <img alt={people.name.first } src ={people.picture.thumbnail}></img></td>
                        <br/>
                        <td> {people.name.first +" "+ people.name.last}</td>
                        <br/>
                        <td>{people.phone}</td>
                        <br/>
                        <td>{people.email}</td>
                        <br/>
                        <td>{people.dob.date}</td>

                    </tr>
            )}
        </div>
    )
}

export default People;