import { DirectionalHint } from "@fluentui/react/lib/Callout";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class CallOutControl implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private _notifyOutputChanged: () => void;
    private _context: ComponentFramework.Context<IInputs>

    private _titleText : string | undefined;
    private _descriptionText : string | undefined;
    private _linkText : string | undefined;
    private _linkUrl : string | undefined;
    private _hideCalloutBtnText : string | undefined;
    private _showCalloutBtnText : string | undefined;
    private _buttonGap : number | undefined;
    private _buttonMessageGap : number | undefined;
    private _beakWidth : number | undefined;
    private _onLoadMessageVisible : boolean | undefined;
    private _directionalHint : number=0;
    private _doubleButtonsDoneLabel : string | undefined;
    private _doubleButtonsCancelLabel : string | undefined;
    private _singleButtonActionLabel : string | undefined;
    private _twoButtonsOrSingleButton: string | undefined;
    private _hideOnOutsideClick:boolean;    
    private _latestValue: string;

    private directionalHintMap: { [key: number]: DirectionalHint } = {
        0: DirectionalHint.topLeftEdge,
        1: DirectionalHint.topCenter,
        2: DirectionalHint.topRightEdge,
        3: DirectionalHint.topAutoEdge,
        4: DirectionalHint.bottomLeftEdge,
        5: DirectionalHint.bottomCenter,
        6: DirectionalHint.bottomRightEdge,
        7: DirectionalHint.bottomAutoEdge,
        8: DirectionalHint.leftTopEdge,
        9: DirectionalHint.leftCenter,
        10: DirectionalHint.leftBottomEdge,
        11: DirectionalHint.rightTopEdge,
        12: DirectionalHint.rightCenter,
        13: DirectionalHint.rightBottomEdge,
    };
    /**
     * Empty constructor.
     */
    constructor() { }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this._context = context;
         this._notifyOutputChanged=notifyOutputChanged;
 
         this._titleText = context.parameters.titleText.raw!;
         this._descriptionText = context.parameters.descriptionText.raw!;
         this._linkText = context.parameters.linkText.raw!;
         this._linkUrl = context.parameters.linkUrl.raw!;
         this._hideCalloutBtnText = context.parameters.hideCalloutBtnText.raw!;
         this._showCalloutBtnText = context.parameters.showCalloutBtnText.raw!;
         this._buttonGap = context.parameters.buttonGap.raw ?? 0;
         this._buttonMessageGap = context.parameters.buttonMessageGap.raw ?? 0;
         this._beakWidth = context.parameters.beakWidth.raw ?? 0;
         this._directionalHint = Number(context.parameters.directionalHint.raw);
         this._twoButtonsOrSingleButton = context.parameters.twoButtonsOrSingleButton.raw; // Convert string to boolean       
         this._onLoadMessageVisible = context.parameters.onLoadMessageVisible.raw || false; // Convert string to boolean
         this._doubleButtonsDoneLabel = context.parameters.doubleButtonsDoneLabel.raw!;
         this._doubleButtonsCancelLabel = context.parameters.doubleButtonsCancelLabel.raw!;
         this._singleButtonActionLabel = context.parameters.singleButtonActionLabel.raw!;
         this._hideOnOutsideClick = context.parameters.hideOnOutsideClick.raw || false;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const props: 
        IHelloWorldProps = { 
                        isVisible: this._onLoadMessageVisible!,
                        onChange: this.onChange,
                        titleText: this._titleText!,
                        descriptionText: this._descriptionText!,
                        linkText: this._linkText!,
                        linkUrl: this._linkUrl!,
                        hideCalloutBtnText: this._hideCalloutBtnText!,
                        showCalloutBtnText: this._showCalloutBtnText!,
                        gapSpace:this._buttonMessageGap!,
                        beakWidth:this._beakWidth!,
                        isShowBeakVisible:true,
                        directionalHint : this.directionalHintMap[this._directionalHint],
                        buttonGap:this._buttonGap!,
                        doubleButtonsDoneLabel : this._doubleButtonsDoneLabel!,
                        doubleButtonsCancelLabel : this._doubleButtonsCancelLabel!,
                        singleButtonActionLabel : this._singleButtonActionLabel!,
                        buttons : this._twoButtonsOrSingleButton!,
                        hideOnOutsideClick : this._hideOnOutsideClick,
                        uniqueKey : this._context.parameters.sampleProperty.attributes?.LogicalName ?? ""
                    };

        return React.createElement(
            HelloWorld, props
        );
    }

    private onChange = (newValue: string) => {
        this._latestValue = newValue;
        this._notifyOutputChanged();
    };
    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return {
            sampleProperty: this._latestValue
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
