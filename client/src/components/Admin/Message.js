import React, { useState } from "react";

const Message = ({message})=> (
    <tr>
    <th scope="col">{message.name}</th>
    <th scope="col">{message.email}</th>
    <th scope="col">{message.website}</th>
    <th scope="col">{message.comment}</th>
    </tr>
)

export default Message