import React from "react";

function SkillsList() {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <label>HTML5 and CSS:</label>
          </td>
          <td>
            <meter
              className="met"
              value="80"
              min="0"
              max="100"
              low="25"
              high="75"
              optimum="50"
            ></meter>
          </td>
        </tr>
        <tr>
          <td>
            <label>Vanilla Javascript:</label>
          </td>
          <td>
            <meter
              className="met"
              value="70"
              min="0"
              max="100"
              low="25"
              high="75"
              optimum="50"
            ></meter>
          </td>
        </tr>
        <tr>
          <td>
            <label>React:</label>
          </td>
          <td>
            <meter
              className="met"
              value="80"
              min="0"
              max="100"
              low="25"
              high="75"
              optimum="50"
            ></meter>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default SkillsList;
