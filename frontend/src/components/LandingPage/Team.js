import React, { Component, Fragment } from 'react';
import { FlexboxGrid, Col, Avatar } from 'rsuite';
import { TeamSection, SectionHeader, SectionTitle } from './styles';

const developersList = [
    'caue96',
    'Foxtrot40',
    'kairon-v',
    'MarcosFloresta',
    'marcosgtavares',
    'thiagorpereira',
    'ViniciusPuerto',
    'victoralvesgomide',
    'williamtpv',
]

class Developer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            profile: null
        };
    }
  
    componentDidMount() {
        const { username } = this.props;
        const settings = {
            method: 'GET',
            headers: {
                Accept: "application/vnd.github.v3+json"

            }
        };
        fetch(`https://api.github.com/users/${username}`, settings)
        .then(response => response.json())
        .then(data => {
            this.setState({ profile: data })
        });
    }
  
    render() {
        const { profile } = this.state;

        if (profile === null) {
            return <Fragment />;
        }

        return (
            <FlexboxGrid.Item className="text-center" componentClass={Col} colspan={24} md={2}>
                <Avatar circle src={profile ? profile.avatar_url : null} className="avatar" size="lg" />
                <h5>{profile.name}</h5>
                <small>Developer</small>
            </FlexboxGrid.Item>
        )
    }
  }

const Developers = () => {
    return developersList.map(username => <Developer username={username} />);
}

export default function Team() {
    return (
        <TeamSection>
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item colspan={15}>
                    <SectionHeader>
                        <SectionTitle>Equipe</SectionTitle>
                    </SectionHeader>
                    <FlexboxGrid justify="space-around" align="middle">
                        <Developers />
                    </FlexboxGrid>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </TeamSection>
    );
};
