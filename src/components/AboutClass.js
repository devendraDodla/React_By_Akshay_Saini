

export class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is Namaste React Web Series</h2>
                <UserClass name = {"Dev (class)"} location = {"Hyderabad"} />
                <UserClass name = {"Harry (class)"} location = {"Banglore"} />

            </div>
        )
    }
}

/** 
 ******** Exclusion Flow  ******

 - Parent Constructor
 - Parent Render
    
    - Dev Constructor
    - Dev Render

    - Harry Constructor
    - Harry Render
    <Upto above batch the overall child components in render face>


    < DOM UPDATED - IN SINGLE BATCH>
    - Dev ComponentDidMount
    - Harry ComponentDidMount

 - Parent ComponentDidMount


 After the render face the commit face will happen

 Once commit face starts then it's modifies the DOM
 Why?

 */