require 'pry-byebug'
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    return_array = []
    l1.each do |x|
      return_array << x
    end
    l2.each do |x|
      return_array << x
    end
    return_array.sort
end

l1 = [1,2]
l2 = [2,1]
merge_two_lists(l1,l2)
