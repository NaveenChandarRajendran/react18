import React from "react";

export default function withData(WrappedComponent) {
    return function EnhancedComponent(props) {
        const commanData ='HOC commanData';
        if(props.isLoading){
            return <h1>Loading....</h1>
        }
        return <WrappedComponent {...props} commanData={commanData}/>
    }
}