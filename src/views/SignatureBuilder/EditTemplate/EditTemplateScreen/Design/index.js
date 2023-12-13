import React from "react";
import "./index.css";

function Design() {
  return (
    <div className="d-flex">
      <div className="Gallery">
        <div className="SocialHeading">Social Profiles</div>
        <div className="marginRight">
          <div className="fontbox">
            <div className="Font">Font</div>
            <div>
              <select className="select">
                <option>italic</option>
                <option>bold</option>
                <option>Script 1</option>
                <option>Script 2</option>
                <option>Script 3</option>
              </select>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Font scale</div>
            <div className="flex">
              <div>A</div>
              <input className="slidebare" type="range" min="0" max="100" />
              <div>A</div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Template color</div>
            <div className="ColorPikerBOx">
              <div className="colorbox"></div>
              <input className="colorPickerInput" placeholder="#EDEDED" />
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Line spacing</div>
            <div className="ColorPikerBOx">
              <input className="lineSpacinginput" placeholder="123" />
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Space from content</div>
            <div className="ColorPikerBOx">
              <input className="lineSpacinginput" placeholder="456" />
            </div>
          </div>
        </div>
        <div className="FeildStyleHeding">Field styles</div>
        <div className="feildStyleBox">
          <div className="fontbox">
            <div className="Font">Name</div>
            <div>
              <select className="select">
                <option>italic</option>
                <option>bold</option>
                <option>Script 1</option>
                <option>Script 2</option>
                <option>Script 3</option>
              </select>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Title</div>
            <div className="BoldItalicSection">
              <div className="gape">
                <div className="WieghtBox">B</div>
                <div className="WieghtBox">/</div>
                <div className="WieghtBox">U</div>
              </div>
              <div className="DefaultStyle">Aa</div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Details</div>
            <div className="ColorPikerBOx">
              <div className="colorbox"></div>
              <input className="colorPickerInput" placeholder="#EDEDED" />
            </div>
          </div>
        </div>
        <div className="ImageShapeHeading">Images</div>
        <div className="imageShapeBox">
          <div className="fontbox">
            <div className="Font">Shape</div>
            <div className="ShapeMainBox">
              <div className="ShapeBox">
                <div className="SquareShape"></div>
                <div className="SquareRounded"></div>
                <div className="cicleShape"></div>
              </div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Size</div>
            <div className="flex">
              <input className="slidebare" type="range" min="0" max="100" />
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Position</div>
            <div className="ColorPikerBOx">
              <input className="lineSpacinginput" placeholder="456" />
            </div>
          </div>
        </div>
        <div className="ImageShapeHeading">Images</div>
        <div className="imageShapeBox">
          <div className="fontbox">
            <div className="Font">Fill</div>
            <div className="ShapeMainBox">
              <div className="ShapeBox">
                <div className="SquareShapefacebok">f</div>
                <div className="SquareRoundedfacebok">f</div>
                <div className="FaceBolICon">f</div>
              </div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Shape</div>
            <div className="ShapeMainBox">
              <div className="ShapeBox">
                <div className="SquareShape"></div>
                <div className="SquareRounded"></div>
                <div className="cicleShape"></div>
              </div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Size</div>
            <div className="flex">
              <input className="slidebare" type="range" min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
      <div className="mainScreen"></div>
    </div>
  );
}

export default Design;
