import React, { useState } from "react";
import "./index.css";

function Design() {
  const [selectedColor, setSelectedColor] = useState("#000");

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
  };
  const [FeildColor, setFeildColor] = useState("#000");

  const handleFeildColorChange = (event) => {
    const newColor = event.target.value;
    setFeildColor(newColor);
    console.log(setFeildColor, "her");
  };

  const [selectedOptions, setSelectedOptions] = useState({
    bold: false,
    italic: false,
    underline: false,
    SquareShape: false,
    SquareRounded: false,
    cicleShape: false,
    SquareShape1: false,
    SquareRounded1: false,
    cicleShape1: false,
  });

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };
  const [selectedShape, setSelectedShape] = useState(null);
  const handleShapeClick = (shape) => {
    setSelectedShape(shape);
  };
  const [selectedImageShape, setSelectedImageShape] = useState(null);
  const handleImageShapeClick = (shape) => {
    setSelectedImageShape(shape);
  };
  const [selectedIcon, setSelectedIcon] = useState(null);
  const handleIconClick = (shape) => {
    setSelectedIcon(shape);
  };
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
              <label
                className="colorbox"
                htmlFor="Color"
                style={{ backgroundColor: selectedColor }}
              ></label>
              <input
                className="colorPickerInput"
                id="Color"
                placeholder="#EDEDED"
                type="color"
                value={selectedColor}
                onChange={handleColorChange}
                hidden
              />
              <input
                className="colorPickerInput"
                id="Color"
                placeholder={selectedColor}
              />
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
                {/* <div className="WieghtBox">B</div>
                <div className="WieghtBox">/</div>
                <div className="WieghtBox">U</div> */}
                <div
                  className={`WieghtBox ${
                    selectedOptions.bold ? "WieghtBoxSelected" : ""
                  }`}
                  onClick={() => toggleOption("bold")}
                >
                  B
                </div>
                <div
                  className={`WieghtBox ${
                    selectedOptions.italic ? "WieghtBoxSelected" : ""
                  }`}
                  onClick={() => toggleOption("italic")}
                >
                  /
                </div>
                <div
                  className={`WieghtBox ${
                    selectedOptions.underline ? "WieghtBoxSelected" : ""
                  }`}
                  onClick={() => toggleOption("underline")}
                >
                  U
                </div>
              </div>
              <div className="DefaultStyle">Aa</div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Details</div>
            <div className="ColorPikerBOx">
              <label
                className="colorbox"
                htmlFor="FeildColor"
                style={{ backgroundColor: FeildColor }}
              ></label>
              <input
                className="colorPickerInput"
                id="FeildColor"
                placeholder="#EDEDED"
                type="color"
                value={FeildColor}
                onChange={handleFeildColorChange}
                hidden
              />
              <input
                className="colorPickerInput"
                id="Color"
                placeholder={FeildColor}
              />
            </div>
          </div>
        </div>
        <div className="ImageShapeHeading">Images</div>
        <div className="imageShapeBox">
          <div className="fontbox">
            <div className="Font">Shape</div>
            <div className="ShapeMainBox">
              <div className="ShapeBox">
                <div
                  className={`SquareShape ${
                    selectedImageShape === "SquareShape1"
                      ? "WieghtBoxSelected"
                      : ""
                  }`}
                  onClick={() => handleImageShapeClick("SquareShape1")}
                ></div>
                <div
                  className={`SquareRounded ${
                    selectedImageShape === "SquareRounded1"
                      ? "WieghtBoxSelected"
                      : ""
                  }`}
                  onClick={() => handleImageShapeClick("SquareRounded1")}
                ></div>
                <div
                  className={`cicleShape ${
                    selectedImageShape === "cicleShape1"
                      ? "WieghtBoxSelected"
                      : ""
                  }`}
                  onClick={() => handleImageShapeClick("cicleShape1")}
                ></div>
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
                <div
                  className={`SquareShapefacebok ${
                    selectedIcon === "SquareShapefacebok" ? "IconSelect" : ""
                  }`}
                  onClick={() => handleIconClick("SquareShapefacebok")}
                >
                  f
                </div>
                <div
                  className={`SquareRoundedfacebok ${
                    selectedIcon === "SquareRoundedfacebok" ? "IconSelect" : ""
                  }`}
                  onClick={() => handleIconClick("SquareRoundedfacebok")}
                >
                  f
                </div>
                <div
                  className={`FaceBolICon ${
                    selectedIcon === "FaceBolICon" ? "IconSelect" : ""
                  }`}
                  onClick={() => handleIconClick("FaceBolICon")}
                >
                  f
                </div>
              </div>
            </div>
          </div>
          <div className="fontbox">
            <div className="Font">Shape</div>
            <div className="ShapeMainBox">
              <div className="ShapeBox">
                <div
                  className={`SquareShape ${
                    selectedShape === "SquareShape1" ? "WieghtBoxSelected" : ""
                  }`}
                  onClick={() => handleShapeClick("SquareShape1")}
                ></div>
                <div
                  className={`SquareRounded ${
                    selectedShape === "SquareRounded1"
                      ? "WieghtBoxSelected"
                      : ""
                  }`}
                  onClick={() => handleShapeClick("SquareRounded1")}
                ></div>
                <div
                  className={`cicleShape ${
                    selectedShape === "cicleShape1" ? "WieghtBoxSelected" : ""
                  }`}
                  onClick={() => handleShapeClick("cicleShape1")}
                ></div>
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
