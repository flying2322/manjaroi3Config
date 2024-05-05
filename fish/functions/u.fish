function u --wraps='sudo pacman -Syyu' --description 'alias u sudo pacman -Syyu'
  sudo pacman -Syyu $argv
        
end
