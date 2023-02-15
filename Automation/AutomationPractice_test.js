
Feature('AutomationPractice');

Scenario('Automation', (I) => {

    //Selecting Radio buttons
    I.amOnPage('/');

    I.click("//input[@value='radio3']");
    if(typeof document !== 'undefined'){
      const radio3 = document.querySelector("//input[@value='radio3']");
      console.log(radio3.checked);
    }
    I.wait(3);

    I.click("//input[@value='radio2']");
    if(typeof document !== 'undefined'){
        const radio2 = document.querySelector("//input[@value='radio2']");
        console.log(radio2.checked);
    }
    I.wait(3);

    //Suggestion
    I.fillField("//input[@id='autocomplete']","South");
    I.wait(3);
    I.click("//div[contains(text(),'South Africa')]")

    //Selecting Checkboxes
    I.click("//input[@name='checkBoxOption1']");
    if(typeof document !== 'undefined'){
        const check1 = document.querySelector("//input[@name='checkBoxOption1']");
        console.log(check1.checked);
    }
    I.wait(3);

    I.click("//input[@name='checkBoxOption2']");
    if(typeof document !== 'undefined'){
        const check2 = document.querySelector("//input[@name='checkBoxOption2']");
        console.log(check2.checked);
    }
    I.wait(3);


    I.click("//input[@name='checkBoxOption3']");
    if(typeof document !== 'undefined'){
        const check3 = document.querySelector("//input[@name='checkBoxOption3']");
        console.log(check3.checked);
    }
    I.wait(3);

    
    I.click("//input[@name='checkBoxOption1']");
    I.wait(3);
    if(typeof document !== 'undefined'){
        const checkOption2 = document.querySelector("//input[@name='checkBoxOption2']");
        console.log(checkOption2.checked);
        const checkOption3 = document.querySelector("//input[@name='checkBoxOption3']");
        console.log(checkOption3.checked);
    }

    //Show/Hide
    I.click("Hide");
    I.wait(3);
    I.click("Show");
    I.wait(3);

    //Web Table Fixed Header
    I.seeElement("//td[contains(text(),'Chennai')]//preceding::td[contains(text(),'46')]");
    I.wait(2);
    I.seeElement("//div[contains(text(),'296')]");
    I.wait(2);
    //Iframe
    I.seeElement("//iframe[@id='courses-iframe']");
    I.wait(3);
    //clicking on Login Inside the Iframe
    //I.click("//div//a[@href='https://courses.rahulshettyacademy.com/sign_in']")




});









