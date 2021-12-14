import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class TeamsList extends React.Component{
    constructor(props) {
        super(props);
        this.state = ({
           focusedTeamId: -1,
            focused: false,
        });
    }
    handleClickFocus(i){
        console.log(this.state.focused);
        this.setState({
           focusedTeamId: i,
            focused: true,
        });
        console.log(this.state.focused);
        console.log(i);
    }
    render() {
        let teams = this.props.teams;
        let teamBox = [];
        let focusedId = this.state.focusedTeamId;
        if (!this.state.focused) {
            for (let i = 0; i < teams.length; i++) {
                teamBox.push(
                    <button onClick={() => this.handleClickFocus(i)} className={"teamBox"}>
                        <div className={"teamName"}>{this.props.teams[i]}</div>
                        {/*<div className={"teamImage"}>Invalid Img</div>*/}
                        {/*<div className={"teamDescription"}>Invalid Desc</div>*/}
                    </button>
                )

            }
        }
        else
        {
            teamBox.push(
                <button onClick={() => this.handleClickFocus(this.state.focusedTeamId)} className={"teamBox"}>
                    <div className={"teamName"}>{this.props.teams[focusedId]}</div>
                    {/*<div className={"teamImage"}>Invalid Img</div>*/}
                    {/*<div className={"teamDescription"}>Invalid Desc</div>*/}
                </button>
            )
        }

        return (
            <div>
                {teamBox}
            </div>
        );
    }
}

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            teamsArr : ["Team Alpha", "Team Team", "Team Epoxy", "Team Delay", "Team Late"],
            focused: false,
        }
    }
    // addToList(){
    //
    // }
    handleGetTeams(){
        this.setState({
            focused:false,
        })
    };
    render() {
        return(
            <div>
                <button>Add teams</button>
                <button onClick={()=> this.handleGetTeams}>Get teams</button>
                <button>Get team by id</button>
                <button>Delete team</button>
                <TeamsList
                    teams = {this.state.teamsArr}
                    focused = {this.state.focused}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
