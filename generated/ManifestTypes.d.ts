/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    sampleProperty: ComponentFramework.PropertyTypes.StringProperty;
    titleText: ComponentFramework.PropertyTypes.StringProperty;
    descriptionText: ComponentFramework.PropertyTypes.StringProperty;
    linkText: ComponentFramework.PropertyTypes.StringProperty;
    linkUrl: ComponentFramework.PropertyTypes.StringProperty;
    hideCalloutBtnText: ComponentFramework.PropertyTypes.StringProperty;
    showCalloutBtnText: ComponentFramework.PropertyTypes.StringProperty;
    onLoadMessageVisible: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    buttonMessageGap: ComponentFramework.PropertyTypes.WholeNumberProperty;
    buttonGap: ComponentFramework.PropertyTypes.WholeNumberProperty;
    beakWidth: ComponentFramework.PropertyTypes.WholeNumberProperty;
    doubleButtonsDoneLabel: ComponentFramework.PropertyTypes.StringProperty;
    doubleButtonsCancelLabel: ComponentFramework.PropertyTypes.StringProperty;
    singleButtonActionLabel: ComponentFramework.PropertyTypes.StringProperty;
    directionalHint: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13">;
    twoButtonsOrSingleButton: ComponentFramework.PropertyTypes.EnumProperty<"0" | "1" | "2">;
    hideOnOutsideClick: ComponentFramework.PropertyTypes.TwoOptionsProperty;
}
export interface IOutputs {
    sampleProperty?: string;
}
