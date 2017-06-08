//Add hue-containers

var hueNumber = document.getElementById( "hue-divider" );
hueNumber.value = getRandomIntInclusive( hueNumber.min, hueNumber.max );

init();
showHelp();

function showHelp() {
  var header = document.getElementById( 'intro' );
  var h = header.scrollHeight;
  header.setAttribute( "style", "max-height: 0rem;" );
  document.getElementById( 'help' ).onclick = function() {
    header.classList.toggle( "show" );
    console.log( header );
    console.log( h );
    if ( header.classList.contains( 'show' ) ) {
      header.setAttribute( "style", "max-height: " + h + "px;" );
    } else {
      header.setAttribute( "style", "max-height: 0rem;" );
    }
  };
}

function init() {
  loadHues();
  var hueInputValue = document.getElementById( "hue-input-value" );
  hueInputValue.innerHTML = hueNumber.value;
  hueNumber.addEventListener( "input", function() {
    hueInputValue.innerHTML = hueNumber.value;
    loadHues();
  } );
}

function loadHues() {
  if ( parseInt( hueNumber.value ) <= parseInt( hueNumber.max ) ) {
    removeElements( "hue-container" );
    for ( var i = 0; i < parseInt( hueNumber.value ); i++ ) {
      var hueDivider = 360 / ( parseInt( hueNumber.value ) );
      addHues( hueDivider, i );
    }
  } else {
    hueNumber.value = hueNumber.max;
    loadHues();
  }
}

function loadRandomHues() {
  hueNumber.value = getRandomIntInclusive( hueNumber.min, hueNumber.max );
  var hueInputValue = document.getElementById( "hue-input-value" );
  hueInputValue.innerHTML = hueNumber.value;

  removeElements( "hue-container" );
  for ( var i = 0; i < hueNumber.value; i++ ) {
    var hueDivider = 360 / ( parseInt( hueNumber.value ) );
    addHues( hueDivider, i );
  }
}

function removeElements( className ) {
  var elements = document.getElementsByClassName( className );
  while ( elements.length > 0 ) {
    elements[ 0 ].parentNode.removeChild( elements[ 0 ] );
  }
}

function addHues( hueDivider, i ) {
  var hueContainer = document.createElement( "div" );
  hueContainer.classList.add( "hue-container" );

  var newHue = document.createElement( "div" );
  newHue.setAttribute( "id", Math.round( hueDivider * i ) );
  newHue.classList.add( "hue" );
  newHue.onclick = hueSelection;
  newHue.style.backgroundColor = "hsl(" + ( hueDivider * i ) + ", 100%, 50%)";
  newHue.setAttribute( "data", Math.round( hueDivider * i ) );

  var newHueName = document.createElement( "h6" );
  newHueName.classList.add( "hue-name" );
  newHueName.innerHTML = Math.round( hueDivider * i );

  var hueCardBottom = document.getElementById( "hue-card-bottom" );
  hueCardBottom.appendChild( hueContainer, hueCardBottom );

  hueContainer.appendChild( newHue, hueContainer );
  hueContainer.appendChild( newHueName, hueContainer );
}

function hueSelection() {
  var selectedHue = this;
  if ( this.classList.contains( "selected" ) ) {
    this.classList.remove( "selected" );
    removeSlCard( selectedHue );

  } else {
    this.classList.add( "selected" );
    createSLCards( selectedHue );
  }
}

function removeSlCard( selectedHue ) {
  var slCardRemove = document.getElementById( "sl-card-" + selectedHue.id );
  slCardRemove.parentNode.removeChild( slCardRemove );
}

function createSLCards( selectedHue ) {
  var selectedHueId = selectedHue.getAttribute( "id" );

  var slSection = document.getElementById( "sl-section" );

  var newSLCard = document.createElement( "section" );
  newSLCard.setAttribute( "id", "sl-card-" + selectedHue.id );
  newSLCard.classList.add( "card", "sl-card" );

  var newCardTop = document.createElement( "div" );
  var closeButtonContainer = newCardTop;
  newCardTop.classList.add( "card-top" );

  var slName = document.createElement( "h2" );
  slName.classList.add( "header-item" );
  slName.style.color = "hsl(" + selectedHueId + ", 100%, 50%)";

  var slInputTable = document.createElement( "div" );
  slInputTable.classList.add( "sl-input-table" );

  var sInputRow = document.createElement( "div" );
  sInputRow.classList.add( "s-input-row" );

  var lInputRow = document.createElement( "div" );
  lInputRow.classList.add( "l-input-row" );

  var sTitleData = document.createElement( "div" );
  sTitleData.classList.add( "s-title-data" );

  var sInputData = document.createElement( "div" );
  sInputData.classList.add( "s-input-data" );

  var lTitleData = document.createElement( "div" );
  lTitleData.classList.add( "l-title-data" );

  var lInputData = document.createElement( "div" );
  lInputData.classList.add( "l-input-data" );

  var saturationInputName = document.createElement( "h6" );
  saturationInputName.innerHTML = "SATURATION";

  var lightnessInputName = document.createElement( "h6" );
  lightnessInputName.innerHTML = "LIGHTNESS";

  var saturationInputValue = document.createElement( "h5" );
  saturationInputValue.classList.add( "s-input-value" );

  var lightnessInputValue = document.createElement( "h5" );
  lightnessInputValue.classList.add( "l-input-value" );


  var saturationInput = document.createElement( "input" );
  saturationInput.setAttribute( "type", "range" );
  saturationInput.setAttribute( "min", "1" );
  saturationInput.setAttribute( "max", "12" );
  saturationInput.setAttribute( "value", getRandomIntInclusive( saturationInput.min, saturationInput.max ) );
  saturationInput.setAttribute( "size", "2" );
  saturationInput.classList.add( "header-item", "divider", "saturation-input" );
  saturationInputValue.innerHTML = saturationInput.value;
  saturationInput.addEventListener( "input", function() {
    saturationInputValue.innerHTML = saturationInput.value;
  } );

  var lightnessInput = document.createElement( "input" );
  lightnessInput.setAttribute( "type", "range" );
  lightnessInput.setAttribute( "min", "1" );
  lightnessInput.setAttribute( "max", "12" );
  lightnessInput.setAttribute( "value", getRandomIntInclusive( lightnessInput.min, lightnessInput.max ) );
  lightnessInput.setAttribute( "size", "2" );
  lightnessInput.classList.add( "header-item", "divider", "lightness-input" );
  lightnessInputValue.innerHTML = lightnessInput.value;
  lightnessInput.addEventListener( "input", function() {
    lightnessInputValue.innerHTML = lightnessInput.value;
  } );

  var slCardBottom = document.createElement( "div" );
  slCardBottom.classList.add( "card-bottom" );

  var newSLTable = document.createElement( "table" );
  newSLTable.classList.add( "sl-table" );
  newSLTable.setAttribute( "id", "slTable" );

  slSection.appendChild( newSLCard, slSection );
  newSLCard.appendChild( newCardTop, newSLCard );
  newCardTop.appendChild( slName, newCardTop );

  newCardTop.appendChild( slInputTable, newCardTop );

  slInputTable.appendChild( sInputRow, slInputTable );
  sInputRow.appendChild( sTitleData, sInputRow );
  sTitleData.appendChild( saturationInputName, sTitleData );
  sInputRow.appendChild( sInputData, sInputRow );
  sInputData.appendChild( saturationInput, sInputData );
  sInputRow.appendChild( saturationInputValue, sInputRow );

  slInputTable.appendChild( lInputRow, slInputTable );
  lInputRow.appendChild( lTitleData, lInputRow );
  lTitleData.appendChild( lightnessInputName, lTitleData );
  lInputRow.appendChild( lInputData, lInputRow );
  lInputData.appendChild( lightnessInput, lInputData );
  lInputRow.appendChild( lightnessInputValue, lInputRow );

  newSLCard.appendChild( slCardBottom, newSLCard );
  addCloseButton( closeButtonContainer );
  slCardBottom.appendChild( newSLTable, slCardBottom );

  slName.innerHTML = selectedHueId;
  fillSLTable( newSLTable, saturationInput, lightnessInput, selectedHueId );
}

function fillSLTable( newSLTable, saturationInput, lightnessInput, selectedHueId ) {
  addLightnessRows();
  saturationInput.addEventListener( "input", function() {
    if ( parseInt( saturationInput.value ) <= parseInt( saturationInput.max ) ) {
      addLightnessRows();
    } else {
      saturationInput.value = parseInt( saturationInput.max );
      addLightnessRows();
    }
  } );

  lightnessInput.addEventListener( "input", function() {
    if ( parseInt( lightnessInput.value ) <= parseInt( lightnessInput.max ) ) {
      addLightnessRows();
    } else {
      lightnessInput.value = parseInt( lightnessInput.max );
      addLightnessRows();
    }
  } );

  function addLightnessRows() {
    newSLTable.innerHTML = "";
    for ( var l = 0; l < parseInt( lightnessInput.value ); l++ ) {
      var lightnessRow = document.createElement( "tr" );
      newSLTable.appendChild( lightnessRow, newSLTable );
      var lightnessValue = 100 - ( ( l + 1 ) * ( 100 / ( parseInt( lightnessInput.value ) + 1 ) ) );

      addSaturationColumns();
      slSelect();

      function addSaturationColumns() {
        for ( var s = 0; s < parseInt( saturationInput.value ); s++ ) {
          var sl = document.createElement( "td" );
          var saturationValue = ( ( s + 1 ) * ( 100 / parseInt( saturationInput.value ) ) );
          sl.classList.add( "sl" );
          sl.setAttribute( "id", selectedHueId + "-" + saturationValue + "-" + lightnessValue );
          lightnessRow.appendChild( sl, lightnessRow );
          sl.style.backgroundColor = "hsl(" + selectedHueId + "," + saturationValue + "%" + "," + lightnessValue + "%" + ")";
        }
      }
    }
  }
}

function slSelect() {
  var selection = document.querySelectorAll( ".sl" );
  for ( var i = 0; i < selection.length; i++ ) {
    selection[ i ].addEventListener( "click", toggleClass, false );

  }
}

function toggleClass() {
  var selectedSl = this;
  if ( this.classList.contains( "selected" ) ) {
    this.classList.remove( "selected" );
    removePalette( selectedSl );

  } else {
    this.classList.add( "selected" );
    createFinalPalette( selectedSl );
  }
}

function createFinalPalette( selectedSl ) {

  var secondary = document.getElementById( "secondary" );

  var swatchContainer = document.createElement( "div" );
  swatchContainer.classList.add( "swatch-container" );
  swatchContainer.setAttribute( "id", selectedSl.id + "-p" );

  var finalColorWrap = document.createElement( "div" );
  finalColorWrap.classList.add( "final-color-wrap" );
  finalColorWrap.style.backgroundColor = selectedSl.style.backgroundColor;

  var finalColorMeta = document.createElement( "div" );
  finalColorMeta.classList.add( "final-color-meta" );

  var finalColorHsl = document.createElement( "h6" );
  finalColorHsl.classList.add( "final-color-hsl" );
  finalColorHsl.innerHTML = selectedSl.style.backgroundColor;

  var finalColorRgb = document.createElement( "h6" );
  finalColorRgb.classList.add( "final-color-rgb" );
  finalColorRgb.innerHTML = rgb2hsl( selectedSl.style.backgroundColor );

  var finalColorHex = document.createElement( "h6" );
  finalColorHex.classList.add( "final-color-hex" );
  finalColorHex.innerHTML = rgb2hex( selectedSl.style.backgroundColor );

  secondary.appendChild( swatchContainer, secondary );
  addCloseButton( finalColorWrap );
  swatchContainer.appendChild( finalColorWrap, swatchContainer );
  swatchContainer.appendChild( finalColorMeta, swatchContainer );
  finalColorMeta.appendChild( finalColorRgb, finalColorMeta );
  finalColorMeta.appendChild( finalColorHsl, finalColorMeta );
  finalColorMeta.appendChild( finalColorHex, finalColorMeta );
}

function removePalette( selectedSl ) {
  var paletteRemove = document.getElementById( selectedSl.id + "-p" );
  paletteRemove.parentNode.removeChild( paletteRemove );
}

function addCloseButton( closeButtonContainer ) {
  var closeCardButton = document.createElement( "div" );
  closeCardButton.addEventListener( "click", deleteCard, false );
  closeCardButton.classList.add( "header-item", "close-card" );
  closeCardButton.innerHTML = "×";
  closeButtonContainer.appendChild( closeCardButton, closeButtonContainer );
}

function deleteCard() {
  var closeButtonTarget = this.parentElement.parentElement;
  var closeButtonTargetId = closeButtonTarget.id;
  closeButtonTarget.parentNode.removeChild( closeButtonTarget );
  deselectById( closeButtonTargetId );
}

function deselectById( closeButtonTargetId ) {
  if ( closeButtonTargetId.includes( "sl-card" ) ) {
    deselectByIdId = closeButtonTargetId.replace( "sl-card-", "" );
  } else if ( closeButtonTargetId.includes( "-p" ) ) {
    deselectByIdId = closeButtonTargetId.replace( "-p", "" );
  } else {
    return;
  }
  var theElement = document.getElementById( deselectByIdId );
  if ( theElement && theElement.classList.contains( "selected" ) ) {
    theElement.classList.remove( "selected" );

  } else {
    return;
  }
}

//Function to convert rgb color to hex format
function rgb2hex( rgb ) {
  if ( /^#[0-9A-F]{6}$/i.test( rgb ) ) {
    return rgb;
  }

  rgb = rgb.match( /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/ );

  function hex( x ) {
    return ( "0" + parseInt( x ).toString( 16 ) ).slice( -2 );
  }
  return "#" + hex( rgb[ 1 ] ) + hex( rgb[ 2 ] ) + hex( rgb[ 3 ] );
}

//Function to convert rgb color to hsl format
function rgb2hsl( rgb ) {
  rgb = rgb.match( /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/ );
  var r = rgb[ 1 ] / 255;
  var g = rgb[ 2 ] / 255;
  var b = rgb[ 3 ] / 255;

  var max = Math.max( r, g, b ),
    min = Math.min( r, g, b );
  var h, s, l = ( max + min ) / 2;

  if ( max == min ) {
    h = s = 0;
  } else {
    var d = max - min;
    s = l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
    switch ( max ) {
      case r:
        h = ( g - b ) / d + ( g < b ? 6 : 0 );
        break;
      case g:
        h = ( b - r ) / d + 2;
        break;
      case b:
        h = ( r - g ) / d + 4;
        break;
    }
    h /= 6;
  }
  return "hsl(" + Math.round( h * 360 ) + ", " + Math.round( 100 * s ) + "%, " + Math.round( 100 * l ) + "%)";
}

// randomize button
function randomizeButton() {
  var randomizeButtonById = document.getElementById( "randomize" );
  var defaultColor = randomizeButtonById.style.color;
  randomizeButtonById.addEventListener( "click", function() {
    loadRandomHues();
    var hues = document.getElementsByClassName( "hue" );
    var randomHueArray = getRandomArray( 0, hues.length - 1 );
    removeElements( "swatch-container" );
    removeElements( "sl-card" );
    for ( var x = 0; x < 2; x++ ) {
      var randomHueElement = hues[ randomHueArray[ x ] ];
      hueSelection.call( randomHueElement );
    }
    var allSlElements = document.getElementsByClassName( "sl" );
    var randomSlArray = getRandomArray( 0, allSlElements.length - 1 );
    for ( var y = 0; y < 5 && y < allSlElements.length; y++ ) {
      var randomSlElement = allSlElements[ randomSlArray[ y ] ];
      toggleClass.call( randomSlElement );
    }
  } );

  function randomButtonMouseEvents() {
    var randomHue = getRandomIntInclusive( 1, 360 );
    var randomSaturation = getRandomIntInclusive( 1, 100 );
    var randomLightness = getRandomIntInclusive( 50, 100 );
    var randomHsl = "hsl(" + randomHue + ", " + "100%" + ", " + "80%" + " )";
    randomizeButtonById.style.color = randomHsl;
    randomizeButtonById.style.borderColor = randomHsl;
  }

  randomizeButtonById.addEventListener( "mouseenter", randomButtonMouseEvents );
  randomizeButtonById.addEventListener( "mousedown", randomButtonMouseEvents );
  randomizeButtonById.addEventListener( "mouseleave", function() {
    randomizeButtonById.style.color = defaultColor;
    randomizeButtonById.style.borderColor = defaultColor;
  } );
}

function getRandomArray( min, max ) {
  var a = [];
  while ( max >= min ) a.push( max-- )
  a.sort( function() {
    return .5 - Math.random()
  } );
  return a;
}

function getRandomIntInclusive( min, max ) {
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

randomizeButton();

setInterval( function() {
  // Code Here
}, 5000 );
