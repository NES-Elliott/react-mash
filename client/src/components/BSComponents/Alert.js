import React from "react"

export const Alert = ({ status, success, messageSuccess, failure, messageFailure }) => {
  return (
    <div className={ "alert alert-" + (status ? success : failure) } role="alert">
      { status ? messageSuccess : messageFailure }
    </div>
  )
}
