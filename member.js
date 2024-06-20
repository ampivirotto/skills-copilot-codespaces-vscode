function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberList = document.getElementById("memberList");
    var skillsList = document.getElementById("skillsList");
    if(member == "" || skills == ""){
        alert("Please enter a member and a skill");
    }else{
        var memberNode = document.createElement("li");
        var skillsNode = document.createElement("li");
        memberNode.appendChild(document.createTextNode(member));
        skillsNode.appendChild(document.createTextNode(skills));
        memberList.appendChild(memberNode);
        skillsList.appendChild(skillsNode);
    }
    document.getElementById("member").value = "";
    document.getElementById("skills").value = "";
}