<?php 

class PostController 
{
    
    private $post;
    
    public function __construct() 
    {
        $this->post = new Post;
    }
    
    public function create($post) 
    {
        $this->post->setTitle($post['title']);
        $this->post->setBrief($post['brief']);
        $this->post->setBody($post['body']);
        
        // Try to insert in database
        // $this->save();
    }
    
    private function save() 
    {
        $sql = "INSERT INTO `posts`(id, title, brief, body, created_at, updated_at) VALUES(null,
            $this->post->getTitle(),
            $this->post->getBrief(),
            $this->post->getBody(),
            NOW(), NOW()
        )";
    }
    
}
