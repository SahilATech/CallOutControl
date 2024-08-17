/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Callout, DefaultButton, DirectionalHint, FocusZone, FocusZoneTabbableElements, FontWeights, Label, Link, mergeStyleSets, PrimaryButton, Stack, Text } from '@fluentui/react';

export interface IHelloWorldProps {
  isVisible: boolean;
    onChange: (newValue: string) => void;
    titleText: string;          // Title text for the callout
    descriptionText: string;    // Body text for the callout
    linkText: string;           // Text for the link
    linkUrl: string;            // URL for the link
    hideCalloutBtnText: string; // Text for the button to hide the callout
    showCalloutBtnText: string; // Text for the button to show the callout  
    gapSpace:number;  
    beakWidth:number;
    isShowBeakVisible:boolean;
    directionalHint:DirectionalHint;
    buttonGap:number;
    doubleButtonsDoneLabel: string;
    doubleButtonsCancelLabel: string;
    singleButtonActionLabel: string;
    buttons:string;
    hideOnOutsideClick:boolean;
    uniqueKey:string;
}

interface IHelloWorldState {
  isCalloutVisible: boolean;
}

export class HelloWorld extends React.Component<IHelloWorldProps,IHelloWorldState> {

  constructor(props: IHelloWorldProps) {
    super(props);
    this.state = {
      isCalloutVisible: props.isVisible,
    };

     // Attach methods and state to the global window object
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     (window as any)[`pcfCalloutControl_${props.uniqueKey}`] = {      
      toggleDialog: this.toggleDialog,
      DismissFunctionOverride: this.handleDismissEvent,
      saveFunctionOverride: this.handleSaveEvent,
      cancelFunctionOverride: this.handleCancelEvent
    };
  }

  private toggleDialog = () => {
    this.setState((prevState) => ({ isCalloutVisible: !prevState.isCalloutVisible }));
  }
  
  private handleSaveEvent = () => {
    this.setState((prevState) => ({ isCalloutVisible: !prevState.isCalloutVisible }));
    const buttonLabel = this.props.buttons === '1' ? this.props.singleButtonActionLabel : this.props.doubleButtonsDoneLabel;
    this.props.onChange(buttonLabel);
  }
  private handleCancelEvent = () => {
    this.props.onChange(this.props.doubleButtonsCancelLabel);
    this.setState((prevState) => ({ isCalloutVisible: !prevState.isCalloutVisible }));
  }

  private handleDismissEvent = () => {
    if(this.props.hideOnOutsideClick)
      this.setState((prevState) => ({ isCalloutVisible: !prevState.isCalloutVisible }));
  }

  private buttonId = `callout-button-${Date.now()}`; // Generate unique ID
  private labelId = `callout-label-${Date.now()}`; // Generate unique ID
  private descriptionId = `callout-description-${Date.now()}`; // Generate unique ID
 
  private handleSaveButton = () => {
    (window as any)[`pcfCalloutControl_${this.props.uniqueKey}`].saveFunctionOverride();
  };

  private handleDismissButton = () => {
    (window as any)[`pcfCalloutControl_${this.props.uniqueKey}`].DismissFunctionOverride();
  };

  private handleCancelButton = () => {
    (window as any)[`pcfCalloutControl_${this.props.uniqueKey}`].cancelFunctionOverride();
  };


  private renderButtons() {
    const { buttons, doubleButtonsDoneLabel, doubleButtonsCancelLabel, singleButtonActionLabel } = this.props;
    
    if (buttons === '1') {
      return (
        <div className={styles.actions}>
          <DefaultButton onClick={this.handleSaveButton} text={singleButtonActionLabel} />
        </div>
      );
    } else if (buttons === '2') {
      return (
        <FocusZone handleTabKey={FocusZoneTabbableElements.all} isCircularNavigation>
          <Stack className={styles.buttons} gap={this.props.buttonGap} horizontal>
            <PrimaryButton onClick={this.handleSaveButton}>{doubleButtonsDoneLabel}</PrimaryButton>
            <DefaultButton onClick={this.handleCancelButton}>{doubleButtonsCancelLabel}</DefaultButton>
          </Stack>
        </FocusZone>
      );
    }
    return null; // Return null or an alternative UI for other cases
  }


  public render(): React.ReactNode {
    const { titleText, descriptionText, linkText, linkUrl, hideCalloutBtnText, showCalloutBtnText, gapSpace, beakWidth, isShowBeakVisible, directionalHint } = this.props;
    const { isCalloutVisible } = this.state;

    return (
      <>
        <div className={styles.buttonArea}>
          <DefaultButton
            id={this.buttonId}
            className={styles.button}
            onClick={this.toggleDialog}
            text={isCalloutVisible ? hideCalloutBtnText : showCalloutBtnText}
          />
        </div>
        {isCalloutVisible ? (
          <Callout
            ariaLabelledBy={this.labelId}
            ariaDescribedBy={this.descriptionId}
            role="dialog"
            className={styles.callout}
            gapSpace={gapSpace}
            target={`#${this.buttonId}`}
            isBeakVisible={isShowBeakVisible}
            beakWidth={beakWidth}
            onDismiss={this.handleDismissButton}
            directionalHint={directionalHint}
            setInitialFocus
          >
            <Text block variant="xLarge" className={styles.title} id={this.labelId}>
              {titleText}
            </Text>
            <Text block variant="small" id={this.descriptionId}>
              {descriptionText}
            </Text>
            <Link href={linkUrl} target="_blank" className={styles.link}>
              {linkText}
            </Link>
            <div>
              {this.renderButtons()}
            </div>
          </Callout>
        ) : null}
      </>
    );
  }

}

const styles = mergeStyleSets({
  buttonArea: {
    verticalAlign: 'top',
    display: 'inline-block',
    textAlign: 'center',
    margin: '0 100px',
    minWidth: 130,
    height: 32,
  },
  button: {
    width: 130,
  },
  callout: {
    width: 320,
    padding: '20px 24px',
  },
  title: {
    marginBottom: 12,
    fontWeight: FontWeights.semilight,
  },
  link: {
    display: 'block',
    marginTop: 20,
  },
  actions: {
    marginTop: 20,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});

