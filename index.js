let myLeads=[""]
const inputEl=document.getElementById("inputfld")
const inputbtn=document.getElementById("inputbtn")
const leadlist=document.getElementById("leadlist")
const clearbtn=document.getElementById("clearbtn")

function saveLead()
{
    console.log("btnn clicked from oncliuck")
}
let leadsfromstorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsfromstorage)
{
    myLeads=leadsfromstorage
    renderLead()
}
tabbtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        let listItems=""
        for(let i=0;i<myLeads.length;i++){
            listItems+=`
            <li>
                <a target="_blank" href= "${myLeads[i]}">
                    ${myLeads[i]}
                </a>    
            </li>
            `
        }
        leadlist.innerHTML =listItems
    })
})
clearbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    renderLead()
})
inputbtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLead()
})

function renderLead(){
    let listItems=""
    for(let i=0;i<myLeads.length;i++){
        // listItems +="<li><a href='"+myLeads[i]+"' target='_blank'>"+ myLeads[i]+ "</a></li>"
        //can also be done by var=document.createelement("li")
        //then var.textcontent=myleads[i]
        //leadlist.append(var)
        //but well do it by string template method
        
        listItems+=`
        <li>
            <a target="_blank" href= "https://${myLeads[i]}">
                ${myLeads[i]}
            </a>    
        </li>
        `
    }
    leadlist.innerHTML =listItems
}
