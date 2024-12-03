describe("Doctor's page" , () => {
    beforeEach( async () => {
        await browser.url("https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard");
    });
    
    it("Check page title", async () =>{
        await expect(browser).toHaveTitle("Appointment Planner - Syncfusion Angular Components Showcase App");
    });

    it("Open modal window for adding a new doctor", async () => {
        await $('[routerlink="/doctors"]').waitForDisplayed();
        await $('[routerlink="/doctors"]').click();
        await $('button.e-control ').click();
        await expect($('#dialog_757320498_0_dialog-content')).toBeDisplayed();
    });
    

    it("Add new doctor", async() => {
        await $('[routerlink="/doctors"]').click();
        await $('button.e-control ').click();
        await expect($("#dialog_757320498_0_dialog-content")).toBeDisplayed();
        await $('input[name="Name"]').setValue('Jhon Doe');
        await $('#DoctorMobile').setValue('0003240759');
        await $('input[name="Email"]').setValue('test@gmail.com');
        await $('input[name="Education"]').setValue('Oxford');
        await $('//button[text()="Save"]').click();
        await expect($('#Specialist_8')).toBeDisplayed();
        await expect($('#Specialist_8').$('.name')).toHaveText("Dr. Jhon Doe");
        await expect($("#Specialist_8").$(".education")).toHaveText("OXFORD");
    });
    it("Close the modal window for adding a new doctor", async () =>{
        await $('[routerlink="/doctors"]').click();
        await $('button.e-control ').click();
        await expect($("#dialog_757320498_0_dialog-content")).toBeDisplayed();
        await $("button[title='Close']").click();
        await $("#dialog_757320498_0_dialog-content").waitForDisplayed({ reverse: true });
        await expect($("#dialog_757320498_0_dialog-content")).not.toBeDisplayed();
        
    });
})