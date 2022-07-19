import logo from './logo.svg';
 import './App.css'; 
 import { memberList } from './data';
import { useEffect, useState } from 'react';
//jquery
import $ from 'jquery';
 function App() { 
   //state for membersList
    const [members, setMembers] = useState(memberList);
    //loop through members and display them in the list

    //member count
    const [memberCount, setMemberCount] = useState(0);
    //current filter
    const [currentFilter, setCurrentFilter] = useState('All');


    const [searchKeyword, setSearchKeyword] = useState('');
    useEffect(() => {
      //if searchKeyword is empty, set members to memberList
      if (searchKeyword === '') {
        setMembers(memberList);
      }
      //if searchKeyword is not empty, filter members
      else {

        const filteredMembers = members.filter(member => {
          return member.name.toLowerCase().includes(searchKeyword.toLowerCase());
        }
        );
        setMembers(filteredMembers);
        console.log(filteredMembers);
      }
    }, [searchKeyword]);

    useEffect(() => {
      setMemberCount(members.length);
    }, [members]);
   //on remove member, remove member from members
    const onRemoveMember = (id) => {
      const newMembers = members.filter(member => {
        return member.id !== id;
      }
      );
      setMembers(newMembers);
    }
  //filter by activity
    const onFilterByActivity = (activity) => {
        $('.activity').removeClass('selected');
        setMembers(memberList);
        const newMembers = memberList.filter(member => {
          let newMember;
          if (activity === 'All') {
            newMember = memberList;
            setMembers(memberList);
          }
          else {

          // if arry of activities contains activity, return member
          member.activities.forEach((memberActivity,i) => {
            console.log(memberActivity);
            console.log(activity);
            if (memberActivity === activity) {
              newMember=member;
            }
          }
          );
          }
          return newMember;
          
        }
        );
        console.log(newMembers);
        setMembers(newMembers);
    }
 


    


  return (
  <div className="App">

      {/* Item List */} {/* Members Name */} {/* Members Age */} {/* Members Rating */} {/* Members Last three activities */} {/* Remove Item */} {/* Re-run rating alogirith */} {/* Search by name */} {/* Filter by activity */} {/* Hiking, Running, Biking */}
      {/* Member count - Specific activity */}

      <div className="header">
          <div className="search">
              <input type="search" name="search" id="search" placeholder="Search " onChange={
                (e) => {
                  setSearchKeyword(e.target.value);
                }
              } />
          </div>
      </div>
      <div className="heading">
        <h1>Outdoor Adventure Club</h1>
      </div>
      <div className="main">
          <div className="filter">
              <div className="count">
                  <div className="filterType">{currentFilter}</div>
                  <div className="filterCount">{memberCount}</div>
              </div>
              <div className="activities">
                <p>Filter</p>
                  <div className="activity selected"
                    onClick={(e) => {
                      e.preventDefault();
                      onFilterByActivity('All')
                      setCurrentFilter('All');
                      $('.activity').removeClass('selected');
                      e.target.classList.add('selected'); 
                    }}
                  >All</div>
                  <div className="activity"
                    onClick={(e) => {onFilterByActivity('Hiking')
                      setCurrentFilter('Hiking');
                    $('.activity').removeClass('selected');
                    e.target.classList.add('selected');
                  }}
                  >Hiking</div>
                  <div className="activity"
                    onClick={(e) => {onFilterByActivity('Walking')
                    $('.activity').removeClass('selected');
                    setCurrentFilter('Walking');
                    e.target.classList.add('selected');
                  }}
                  >Walking</div>
                  <div className="activity"
                    onClick={(e) => {onFilterByActivity('Climbing')
                    setCurrentFilter('Climbing');
                    $('.activity').removeClass('selected');
                    e.target.classList.add('selected');
                  }}
                  >Climbing</div>
              </div>
          </div>
          <div className="listContainer">

          <div className="list">
          {members.map((member) => {
      return (
        <div key={member.id} className="member">
          <div className="memberName">{member.name}</div>
          <div className="memberAge">Age : {member.age}</div>
          <div className="memberRating">{member.rating} stars</div>
          <div className="memberActivities">
          {
            member.activities.map((activity,index) => {
              return (
                <div key={index} className="memberActivity">
                  <div >{activity}</div>
                </div>
              )})
          }

          </div>
          <div className="memberRemove" data-memberid={member.id}
          onClick={() => {

            onRemoveMember(member.id);
            
          }}
          >Remove</div>
          
        </div>
      );
    })}
          </div>
          </div>
      </div>


  </div>
); } export default App;