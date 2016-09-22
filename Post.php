<?php

class Post 
{
    private $id;
    
    private $title;
    
    private $brief;
    
    private $body;
    
    public function setId($id = null) 
    {
        $this->id = $id;
    }
    
    public function setTitle($title) 
    {
        $this->title = $title;
    }
    
    public function setBrief($brief) 
    {
        $this->brief = $brief;
    }
    
    public function setBody($body) 
    {
        $this->body = $body;
    }
    
    public function getId() 
    {
        return $this->id;
    }
    
    public function getTitle() 
    {
        return $this->title;
    }
    
    public function getBrief() 
    {
        return $this->brief;
    }
    
    public function getBody() 
    {
        return $this->body;
    }
}
