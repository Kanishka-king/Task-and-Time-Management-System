package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="project_access")
public class Project {
    @Id
    
    private int projectid;
    private String name;
    private String requirement;
  
    private int budget;
    private String status;

    public Project() {
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRequirement() {
		return requirement;
	}

	public void setRequirement(String requirement) {
		this.requirement = requirement;
	}

	public int getBudget() {
		return budget;
	}

	public void setBudget(int budget) {
		this.budget = budget;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Project(String name,String requirement, int budget, String status) {
		super();
		this.name=name;
		this.requirement = requirement;
		this.budget = budget;
		this.status = status;
	}
   
   
	
    
    
}