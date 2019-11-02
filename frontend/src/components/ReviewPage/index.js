import React, { Component } from 'react';
import { ScriptBlockDivReview, SpecialContainer } from './styles';
import { FlexboxGrid, Container, Content, Panel, ButtonGroup } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Navbar from './Navbar';
import Video from './Video';
import FinishButton from './FinishButton';
import RedoButton from './RedoButton';

export default class ReviewPage extends Component {
    render() {
        return (
            <Container>
                {/* <Navbar /> */}
                {/* <SigningSteps history={this.props.history} /> */}
                <Content>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item   >
                            <Video />
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item >
                            <SpecialContainer>
                                <ScriptBlockDivReview>
                                    <Panel bordered expanded>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sem sed erat luctus cursus congue in eros. Etiam venenatis dui at faucibus commodo. Etiam vel finibus erat, a dapibus purus. Integer pharetra vulputate enim, non elementum urna faucibus non. In vel tellus bibendum, tincidunt dolor ut, posuere urna. Integer tempor, augue vitae molestie tincidunt, tortor dolor facilisis ante, non mollis mi purus scelerisque arcu. Proin quis risus non nibh placerat bibendum a id diam. Nullam sollicitudin rutrum euismod. Fusce vitae malesuada eros. Donec sollicitudin luctus ex id blandit. In orci ex, posuere gravida eleifend eget, sodales et nisi. Donec augue lorem, iaculis eget bibendum ut, aliquam non sapien. Vivamus quis mi tristique, imperdiet dolor ut, pretium ipsum. Nam ex risus, dignissim ut accumsan rhoncus, congue a erat.
                                    </Panel>
                                </ScriptBlockDivReview>
                                <ButtonGroup justified>
                                    <RedoButton />  
                                    <FinishButton />  
                                </ButtonGroup>  
                            </SpecialContainer>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </Content>
            </Container>
        );
    }
}
